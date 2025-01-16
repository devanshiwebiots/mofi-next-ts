import { Card, CardBody, Col } from "reactstrap";

import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavascriptModeTitle } from "@/Constant";
import { JavaData } from "@/Data/Miscellaneous/Editors";
import { Highlight, themes } from "prism-react-renderer";

const JavascriptMode = () => {
  return (
    <Col lg='6'>
      <Card>
        <CommonCardHeader title={JavascriptModeTitle} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={JavaData} language='javascript'>
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
export default JavascriptMode;
