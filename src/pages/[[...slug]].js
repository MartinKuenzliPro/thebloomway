import React from 'react';
import Head from 'next/head';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription, seoGenerateOgImage } from '../utils/seo-utils';
import { SITE_CONFIG } from '../utils/site-config';

const SITE_URL = SITE_CONFIG.siteUrl;

const JSON_LD_ORG = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.companyName,
    url: SITE_URL,
    email: SITE_CONFIG.contactEmail,
    logo: SITE_URL + SITE_CONFIG.logoUrl,
    image: SITE_URL + SITE_CONFIG.heroImageUrl,
    address: {
        '@type': 'PostalAddress',
        addressLocality: SITE_CONFIG.addressLocality,
        addressRegion: SITE_CONFIG.addressRegion,
        addressCountry: SITE_CONFIG.addressCountry
    },
    founder: { '@type': 'Person', name: SITE_CONFIG.founderName },
    sameAs: [SITE_CONFIG.instagramUrl],
    serviceType: ['Talent Management', 'Content Creation', 'Social Media Management']
};

function getHreflangUrls(urlPath) {
    const isEn = urlPath.startsWith('/en');
    const dePath = isEn ? (urlPath === '/en' ? '/' : urlPath.replace(/^\/en/, '')) : urlPath;
    const enPath = isEn ? urlPath : '/en' + (urlPath === '/' ? '' : urlPath);
    return { de: SITE_URL + dePath, en: SITE_URL + enPath };
}

function Page(props) {
    const { page, site } = props;
    const { modelName, urlPath } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    const ogImage = seoGenerateOgImage(page, site);
    const canonicalUrl = SITE_URL + urlPath;
    const { de: deUrl, en: enUrl } = getHreflangUrls(urlPath);

    return (
        <>
            <Head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                {metaDescription && <meta property="og:description" content={metaDescription} />}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="The Bloom Way" />
                <meta name="twitter:card" content="summary_large_image" />
                {title && <meta name="twitter:title" content={title} />}
                {metaDescription && <meta name="twitter:description" content={metaDescription} />}
                {ogImage && <meta name="twitter:image" content={ogImage} />}
                <link rel="canonical" href={canonicalUrl} />
                <link rel="alternate" hrefLang="de" href={deUrl} />
                <link rel="alternate" hrefLang="en" href={enUrl} />
                <link rel="alternate" hrefLang="x-default" href={deUrl} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_ORG) }}
                />
            </Head>
            <PageLayout page={page} site={site} />
        </>
    );
}

export function getStaticPaths() {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;
