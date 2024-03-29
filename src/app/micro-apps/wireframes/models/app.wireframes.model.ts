
export interface WireframeModel {
    id:string;
    name:string
    devices: Device[];
}

export interface Device {
    id:                               string;
    name:                             string;
    deviceTypeId:                     string;
    failsafe:                         boolean;
    tempMin:                          number;
    tempMax:                          number;
    installationPosition:             string;
    insertInto19InchCabinet:          boolean;
    motionEnable:                     boolean;
    siplusCatalog:                    boolean;
    simaticCatalog:                   boolean;
    rotationAxisNumber:               number;
    positionAxisNumber:               number;
    advancedEnvironmentalConditions?: boolean;
    terminalElement?:                 boolean;
}