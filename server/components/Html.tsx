import * as React from 'react';

export interface IHtmlProps {
    title?: string;
    description?: string;
    scripts?: string[];
    prefetchScripts?: string[];
    styles?: string[];
}

export const Html: React.SFC<IHtmlProps> = ({
    children,
    title = '',
    description = '',
    scripts = [],
    prefetchScripts = [],
    styles = []
}) => (
    <html lang="ru">
        <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {prefetchScripts.map((s, i) => <link key={i} rel="prefetch" href={s} as="script" />)}
            {styles.map((s, i) => <link key={i} rel="stylesheet" href={s} />)}
        </head>
        <body>
            {children}
            {scripts.map(s => <script key={s} src={s} defer={true} />)}
        </body>
    </html>
);
