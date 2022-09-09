import { User } from "@prisma/client";
import requestContext from "request-context";

export class ContextProvider {
  private static readonly nameSpace = "request";

  private static readonly authUserKey = "user_key";

  private static readonly languageKey = "language_key";

  private static get<T>(key: string): T {
    return requestContext.get(ContextProvider.getKeyWithNamespace(key));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static set(key: string, value: any): void {
    requestContext.set(ContextProvider.getKeyWithNamespace(key), value);
  }

  private static getKeyWithNamespace(key: string): string {
    return `${ContextProvider.nameSpace}.${key}`;
  }

  static setAuthUser(user: User): void {
    ContextProvider.set(ContextProvider.authUserKey, user);
  }

  static setLanguage(language: string): void {
    ContextProvider.set(ContextProvider.languageKey, language);
  }

  static getLanguage(): string {
    return ContextProvider.get(ContextProvider.languageKey);
  }

  static getAuthUser(): User {
    return ContextProvider.get(ContextProvider.authUserKey);
  }
}
