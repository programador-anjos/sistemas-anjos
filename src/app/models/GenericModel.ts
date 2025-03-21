export abstract class GenericModel<T> {
  public id?: string;
  public criado?: boolean;
  public alterado?: boolean;
  public deletado?: boolean;
  public selecionado?: boolean;

  protected constructor(model?: Partial<T>) {
    if (model) {
      Object.assign(this, model);
    }
  }

  public json(): any {
    return JSON.parse(JSON.stringify(this));
  }

}
