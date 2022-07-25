import { PropsWithChildren } from 'react';

// parts
import Header from '~/components/parts/Header';
import Footer from '~/components/parts/Footer';

type PageTemplateProps = {
    hideHeader?: boolean;
};
const PageTemplate = ({ children, hideHeader = false }: PropsWithChildren<PageTemplateProps>) => (
    <>
        <Header hide={hideHeader} />
        {children}
        <Footer />
    </>
);

export default PageTemplate;
