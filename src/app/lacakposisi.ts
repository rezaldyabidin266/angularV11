import {ICoordinates} from "../app/cordinat";

export interface IPositionTracker {
    subscribe(onNewPosition: (coords: ICoordinates) => void): void;
}