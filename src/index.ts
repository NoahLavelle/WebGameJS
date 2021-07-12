import EngineObject from './objects/engineObject';
import GameObject from './objects/gameObject';
import GameManager from './logic/gameManager';
import BasicShape from './objects/basicShape';
import Transform from './objects/transform';
import { BasicShapeType, BasicShapeEffect } from './properties/BasicShapeProperties';

/*
Features to add:
    Collision & Raycasting
    Input Manager
    Shape Effects
    SVG Colouring and outlines
    Physics
    Easy way to move gameobjects
    Networking
*/

export {
    EngineObject,
    GameObject,
    GameManager,
    BasicShape,
    BasicShapeType,
    BasicShapeEffect,
    Transform,
};