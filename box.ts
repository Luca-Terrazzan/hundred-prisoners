export class Box {
    label: Box;
    _label: number;
    value: Box;
    _value: number;

    public constructor(label: number, value: number) {
        this._label = label;
        this._value = value;
    }
}