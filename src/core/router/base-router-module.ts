import {Request, Response} from 'express';

export interface ModuleEndpointMap {
    [key: string]: HttpVerbMap;
}

export interface HttpVerbMap {
    get?: Array<FeatureModuleRouterInfo>,
    post?: Array<FeatureModuleRouterInfo>,
    put?: Array<FeatureModuleRouterInfo>,
    patch?: Array<FeatureModuleRouterInfo>,
    delete?: Array<FeatureModuleRouterInfo>,
}

export interface FeatureModuleRouterInfo {
    endpoint: string,
    callback: Function,
    isProtected: boolean,
}

export class BaseRouterModule {
    protected readonly context: string = '/api';
    protected version: string = 'v1';
    protected moduleName: string = 'rest-api';

    constructor(moduleName: string) {
        if (typeof moduleName === 'string') {
            this.moduleName = moduleName;
        }
    }

    protected MODULES_ENDPOINT_MAP: ModuleEndpointMap = {
        [this.moduleName]: {
            get: [
                {
                    endpoint: `${this.context}/${this.version}/${this.moduleName}`,
                    callback: (req: Request, res: Response) => {
                        res.sendStatus(200).send({status:200, msg: 'OK'});
                    },
                    isProtected: false,
                }
            ]
        }
    }

    public getRoutesFromModules(): ModuleEndpointMap {
        return this.MODULES_ENDPOINT_MAP;
    }
}