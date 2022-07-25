import { PropsWithChildren } from 'react';
import Base from './base';

type PostTemplateProps = {
    title?: string;
};
const PostTemplate = ({ children, title }: PropsWithChildren<PostTemplateProps>): JSX.Element => {
    return (
        <Base>
            {title && <h1>{title}</h1>}
            {children}
        </Base>
    );
};

export default PostTemplate;
