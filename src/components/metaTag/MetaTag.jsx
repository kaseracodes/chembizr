/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const MetaTag = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaTag;
