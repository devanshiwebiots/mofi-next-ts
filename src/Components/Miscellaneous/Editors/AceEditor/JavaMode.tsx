import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { JavaModeHeading } from "@/Constant";
import { TypScriptData } from "@/Data/Miscellaneous/Editors";
import { Highlight, themes } from "prism-react-renderer";
import { Card, CardBody, Col } from "reactstrap";

const JavaMode = () => {
  return (
    <Col lg='6'>
      <Card>
        <CommonCardHeader title={JavaModeHeading} />
        <CardBody>
          <Highlight theme={themes.vsDark} code={TypScriptData} language='Java'>
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
export default JavaMode;
