declare const nativeSort: <T extends {
    [key: string]: unknown;
}>(key: string) => (a: T, b: T) => 1 | -1 | 0;
export { nativeSort };
