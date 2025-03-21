

export class Utils {

  public static gerarId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  public static criarRota(string: string | null): string {
    if (!string)
      return "";
    return string.normalize("NFD")
      .replace(/[^a-zA-Z\s]/g, "")
      .replaceAll(' ', '-')
      .toLowerCase();
  }

}
