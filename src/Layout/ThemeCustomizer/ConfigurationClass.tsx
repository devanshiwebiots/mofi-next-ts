import ConfigDB from "@/Config/ThemeConfig";
import { Cancel, Configuration, CopyText } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { PropsTypeProp } from "@/Types/ThemeCustomizerTypes";
import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const ConfigurationClass: React.FC<PropsTypeProp> = ({ toggle, modal }) => {
  const { layout } = useAppSelector((state) => state.themeCustomizer);

  const handleThemeCopy = async () => {
    try {
      const configDB = ConfigDB.data;
      await navigator.clipboard.writeText(JSON.stringify(configDB));
      toast.success("Code copied to clipboard!", {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
    } catch (err) {
      toast.error("Failed to copy text to clipboard.", {
        position: "bottom-right",
        autoClose: 3000,
        closeOnClick: true,
        theme: "light",
      });
    }
  };

  const configDB = ConfigDB.data;
  return (
    <Fragment>
      <Modal isOpen={modal} toggle={toggle} className='modal-body' centered={true}>
        <ModalHeader toggle={toggle}>{Configuration}</ModalHeader>
        <ModalBody>
          <Container fluid={true} className='bd-example-row'>
            <Row>
              <p>{"To replace our design with your desired theme. Please do configuration as mentioned"}</p>
              <p>
                {" "}
                <b>{"Path : src > config > ThemeConfig.ts "}</b>{" "}
              </p>
            </Row>
            <pre>
              <code>
                <div>{"export class ConfigDB "}&#123;</div>
                <div>{"static data"} = &#123;</div>
                <div>{"settings"}&#58; &#123;</div>
                <div>
                  {"layout_type"}&#58; '{configDB.settings.layout_type}',
                </div>
                <div>{"sidebar"}&#58; &#123;</div>
                <div>
                  {"type"}&#58; '{layout}',
                </div>
                <div>&#125;,</div>
                <div>&#125;,</div>
                <div>{"color"}&#58; &#123;</div>
                <div>
                  {"primary_color"}&#58; '{configDB.color.primary_color}',{" "}
                </div>
                <div>
                  {"secondary_color"}&#58; '{configDB.color.secondary_color}',{" "}
                </div>
                <div>
                  {"mix_background_layout"}&#58; '{configDB.color.mix_background_layout}',{" "}
                </div>
                <div>&#125;,</div>
                <div>&#125;</div>
                <div>&#125;</div>
              </code>
            </pre>
          </Container>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' className='notification' onClick={handleThemeCopy}>
            {CopyText}
          </Button>
          <Button color='secondary' onClick={toggle}>
            {Cancel}
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  );
};

export default ConfigurationClass;
