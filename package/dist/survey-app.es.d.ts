import { JSX as JSX_2 } from 'react/jsx-runtime';

declare type ApiContextType = {
    apiKey: string;
};

export declare interface RenderAppOptions {
    apiKey: string;
    containerId: string;
}

/**
 * Renders the Feedback widget into a specified DOM container.
 *
 * @param options.apiKey
 * @param options.containerId
 */
export declare function renderFeedbackApp({ apiKey, containerId }: RenderAppOptions): void;

export declare const RootApp: ({ apiKey }: ApiContextType) => JSX_2.Element;

export { }
