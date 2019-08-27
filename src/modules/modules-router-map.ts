export interface FeatureModuleRouter {
    moduleName: any;
    parser: string;
}

export class ModulesRouterRapper {
    public registeredModules: Array<FeatureModuleRouter> = [
        {
            moduleName: 'NomeDaClasse', 
            parser: 'parser'
        }
    ];
}