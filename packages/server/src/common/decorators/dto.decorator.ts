import type { Constructor } from "../../types";
import type { AbstractEntity } from "../abstract.entity";
import type { AbstractDto } from "../dto/abstract.dto";

export function Dto(
  dtoClass: Constructor<AbstractDto, [AbstractEntity, unknown]>,
): ClassDecorator {
  return (ctor) => {
    ctor.prototype.dtoClass = dtoClass;
  };
}
