import * as React from 'react';
import NextImage from 'next/image';
import classNames from 'classnames';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';

export default function ImageBlock(props) {
    const { elementId, className, imageClassName, url, altText = '', styles = {} } = props;
    if (!url) {
        return null;
    }
    const fieldPath = props['data-sb-field-path'];
    const annotations = fieldPath
        ? { 'data-sb-field-path': [fieldPath, `${fieldPath}.url#@src`, `${fieldPath}.altText#@alt`, `${fieldPath}.elementId#@id`].join(' ').trim() }
        : {};

    const imgClassName = classNames(
        imageClassName,
        styles?.self?.padding ? mapStyles({ padding: styles?.self?.padding }) : undefined,
        styles?.self?.borderWidth && styles?.self?.borderWidth !== 0 && styles?.self?.borderStyle !== 'none'
            ? mapStyles({
                  borderWidth: styles?.self?.borderWidth,
                  borderStyle: styles?.self?.borderStyle,
                  borderColor: styles?.self?.borderColor ?? 'border-primary'
              })
            : undefined,
        styles?.self?.borderRadius ? mapStyles({ borderRadius: styles?.self?.borderRadius }) : undefined
    );

    const isSvg = url.toLowerCase().endsWith('.svg');

    return (
        <div
            className={classNames(
                'sb-component',
                'sb-component-block',
                'sb-component-image-block',
                className,
                styles?.self?.margin ? mapStyles({ margin: styles?.self?.margin }) : undefined
            )}
            {...annotations}
        >
            {isSvg ? (
                <img id={elementId} className={imgClassName} src={url} alt={altText} />
            ) : (
                <NextImage
                    id={elementId}
                    className={imgClassName}
                    src={url}
                    alt={altText}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            )}
        </div>
    );
}
