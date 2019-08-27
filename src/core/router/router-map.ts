import { ModuleEndpointMap } from "./base-router-module";
import { ModulesRouterRapper, FeatureModuleRouter } from '../../modules/modules-router-map';

export class RouterModuleFactory {
    
    private routerModulesMap: Array<ModuleEndpointMap> = [];

    constructor() {
        this.bootstrapModules(new ModulesRouterRapper());
    }

    private bootstrapModules(routerModulesRapper: ModulesRouterRapper) {
        this.routerModulesMap = routerModulesRapper
        .registeredModules.map(this.createModules.bind(this));
    }

    private createModules(registeredModule: FeatureModuleRouter): Array<ModuleEndpointMap> {
        const { moduleName, parser } = registeredModule;
        return new moduleName()[parser]();
    }

    public getRegisteredModules() {
        return this.routerModulesMap.map((routerModule: ModuleEndpointMap) => {
            const moduleName: string = Object.keys(routerModule)[0];
            return routerModule[moduleName];
        })
    }
}