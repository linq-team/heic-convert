declare namespace _default {
    function JPEG({ data, width, height, quality }: {
        data: any;
        width: any;
        height: any;
        quality: any;
    }): Promise<Uint8Array>;
    function PNG({ data, width, height }: {
        data: any;
        width: any;
        height: any;
    }): Promise<Uint8Array>;
}
export default _default;
