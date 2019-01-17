import { IAssetsFileTypes } from './IAssetsFileTypes';

export interface IAssetsBundles {
    init: IAssetsFileTypes;
    vendor: IAssetsFileTypes;
    app: IAssetsFileTypes;
}
