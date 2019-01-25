
import {Mat} from './opencv.common'
export * from './opencv.common'

export function getOpenCVVersion(): string;
export function imread(path: string): Promise<Mat>;

