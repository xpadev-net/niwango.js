declare const nativeSort: <T extends {
    [key: string]: unknown;
}>(key: string) => (a: T, b: T) => 0 | 1 | -1;
export { nativeSort };
