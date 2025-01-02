export class GetStaticMsg {
  static requiredMsg(field: string) {
    return `Поле "${field}" обязателен`;
  }

  static notFoundMsg(entity: string) {
    return `"${entity}" не найден`;
  }

  static invalidMsg(field: string) {
    return `Неверное значение поля "${field}"`;
  }

  static stringMsg(field: string) {
    return `Поле "${field}" должно быть строкой`;
  }

  static numberMsg(field: string) {
    return `Поле "${field}" должно быть числом`;
  }
}
