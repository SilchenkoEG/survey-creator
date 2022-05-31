import React from "react";
import { Base, SurveyModel } from "survey-core";
import { ReactElementFactory, LogoImage, SvgIcon, attachKey2click } from "survey-react-ui";
import { CreatorBase, LogoImageViewModel } from "survey-creator-core";
import { CreatorModelElement } from "./ModelElement";

interface ILogoImageComponentProps {
  data: CreatorBase;
}

export class LogoImageComponent extends CreatorModelElement<ILogoImageComponentProps, any> {
  private model: LogoImageViewModel;
  private rootRef: React.RefObject<HTMLDivElement>;
  constructor(props: ILogoImageComponentProps) {
    super(props);
    this.rootRef = React.createRef();
  }
  protected createModel(): void {
    this.model = new LogoImageViewModel(this.props.data, null);
  }
  protected getUpdatedModelProps(): string[] {
    return ["data"];
  }
  protected getStateElement(): Base {
    return this.model;
  }
  componentDidMount() {
    super.componentDidMount();
    this.model.root = this.rootRef.current;
  }
  render(): JSX.Element {
    let content: JSX.Element = null;
    if (this.model.survey.locLogo.renderedHtml) {
      content = <>
        <LogoImage data={this.props.data.survey}></LogoImage>
        {this.model.allowEdit ? <div className="svc-image-item-value-controls">
          {attachKey2click(
            <span className="svc-image-item-value-controls__button svc-image-item-value-controls__choose-file" onClick={() => this.model.chooseFile(this.model)}>
              <SvgIcon size={24} iconName={"icon-file"}></SvgIcon>
            </span>
          )}
          {attachKey2click(
            <span className="svc-image-item-value-controls__button svc-image-item-value-controls__remove" onClick={() => this.model.remove(this.model)}>
              <SvgIcon size={24} iconName={"icon-delete"}></SvgIcon>
            </span>
          )}
        </div> : null}
      </>;
    }
    else {
      content = this.model.allowEdit ? attachKey2click(<div className="svc-logo-image-placeholder" onClick={() => this.model.chooseFile(this.model)}><svg><use xlinkHref="#icon-logo"></use></svg></div>) : null;
    }
    return (
      <div ref={this.rootRef} className="svc-logo-image">
        <input aria-hidden="true" type="file" tabIndex={-1} accept="image/*" className="svc-choose-file-input" />
        {content}
      </div>
    );
  }
}

ReactElementFactory.Instance.registerElement("svc-logo-image",
  (props: ILogoImageComponentProps) => {
    return React.createElement(LogoImageComponent, props);
  }
);