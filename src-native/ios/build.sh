set -e
set -o pipefail

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

SOURCE_NAME="OpenCVAdditions"
IOS_SOURCE_DIR="$CURRENT_DIR"

CONFIGURATION="Release"
PROJECT_NAME="$SOURCE_NAME"
TARGET_NAME="$SOURCE_NAME"
FRAMEWORK_NAME="$SOURCE_NAME"

BUILD_DIR="$IOS_SOURCE_DIR/build"
# BUILD_FOR_SIMULATOR_DIR="$BUILD_DIR/$CONFIGURATION-iphonesimulator"
# BUILD_OUTPUT_DIR="$IOS_SOURCE_DIR/build/outputs"

PLUGIN_TARGET_DIR="$CURRENT_DIR/../plugin/platforms"
PLUGIN_TARGET_SUBDIR="$PLUGIN_TARGET_DIR/ios"

CARTO_FRAMEWORK="$IOS_SOURCE_DIR/Pods/OpenCV/opencv2.framework"

UNIVERSAL_OUTPUTFOLDER="$IOS_SOURCE_DIR/build/outputs"


cd $IOS_SOURCE_DIR

if [ -d "$BUILD_UNIVERSAL_OUTPUTFOLDERDIR" ]; then
    rm -rf "$UNIVERSAL_OUTPUTFOLDER"
fi

echo "install pod" 
pod install

# Make sure the output directory exists

mkdir -p "${UNIVERSAL_OUTPUTFOLDER}"

# Next, work out if we're in SIM or DEVICE

xcodebuild -workspace $PROJECT_NAME.xcworkspace -scheme $TARGET_NAME -configuration Debug -sdk iphonesimulator ONLY_ACTIVE_ARCH=NO BUILD_DIR="${BUILD_DIR}" BUILD_ROOT="${BUILD_ROOT}" clean build

xcodebuild -workspace $PROJECT_NAME.xcworkspace -scheme $TARGET_NAME ONLY_ACTIVE_ARCH=NO -configuration ${CONFIGURATION} -sdk iphoneos  BUILD_DIR="${BUILD_DIR}" BUILD_ROOT="${BUILD_ROOT}" clean build

# Step 2. Copy the framework structure (from iphoneos build) to the universal folder

cp -R "${BUILD_DIR}/${CONFIGURATION}-iphoneos/${PROJECT_NAME}.framework" "${UNIVERSAL_OUTPUTFOLDER}/"

# Step 3. Copy Swift modules from iphonesimulator build (if it exists) to the copied framework directory

# BUILD_PRODUCTS="${SYMROOT}/../../../../Products"

cp -R "${BUILD_DIR}/Debug-iphonesimulator/${PROJECT_NAME}.framework/Modules/${PROJECT_NAME}.swiftmodule/." "${UNIVERSAL_OUTPUTFOLDER}/${PROJECT_NAME}.framework/Modules/${PROJECT_NAME}.swiftmodule"

# Step 4. Create universal binary file using lipo and place the combined executable in the copied framework directory

lipo -create -output "${UNIVERSAL_OUTPUTFOLDER}/${PROJECT_NAME}.framework/${PROJECT_NAME}" "${BUILD_DIR}/Debug-iphonesimulator/${PROJECT_NAME}.framework/${PROJECT_NAME}" "${BUILD_DIR}/${CONFIGURATION}-iphoneos/${PROJECT_NAME}.framework/${PROJECT_NAME}"

echo "$FRAMEWORK_NAME.framework was built in $UNIVERSAL_OUTPUTFOLDER"

if [ ! -d $PLUGIN_TARGET_DIR ]; then
    mkdir $PLUGIN_TARGET_DIR
fi

if [ ! -d $PLUGIN_TARGET_SUBDIR ]; then
    mkdir $PLUGIN_TARGET_SUBDIR
fi

cp -R "$UNIVERSAL_OUTPUTFOLDER/$FRAMEWORK_NAME.framework" $PLUGIN_TARGET_SUBDIR

echo "iOS Framework was copied to $PLUGIN_TARGET_SUBDIR"

cd $CURRENT_DIR
