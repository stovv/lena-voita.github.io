import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react';

type ExternalLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
const ExternalLink = (props: ExternalLinkProps) => <a {...props} target={'_blank'} />;

export default ExternalLink;
