import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CSSModeHeading } from "@/Constant";
import { CssData } from "@/Data/Miscellaneous/Editors";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

const CssMode = () => {
  return (
    <Col lg='6'>
      <Card>
        <CommonCardHeader title={CSSModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={CssData} language='css'>
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CssMode;
