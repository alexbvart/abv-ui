import styled from "styled-components";
import { COLOR_BASE } from "../../../../common/constants";

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 20px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  
  background: ${COLOR_BASE.INACTIVE_BG};
  backdrop-filter: blur(5px);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
`;

export const ProgressBarFillStyled = styled.div<{ percentage: number }>`
  background-color: ${COLOR_BASE.INACTIVE};
  width: ${(props) => props.percentage}%;
  height: 100%;
  color: ${COLOR_BASE.ACTIVE};
`;

export const PercentageTextStyled = styled.div`
  position: absolute;  

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  min-height: 20px;
  width: 100%;
  margin: auto;
  flex: 1;

  font-size: 12px;
  z-index: 2;
  text-align: center;
`;

export interface ProgressBarProps {
  fill: number;
  children?: React.ReactNode;
  className?: string;
}
export const ProgressBar = ({ fill, children, className }: ProgressBarProps) => {
  return (
    <ProgressBarContainer className={className}>
      {children || (
        <>
          <PercentageText>{fill}%</PercentageText>
          <ProgressBarFill fill={fill} />
        </>
      )}
    </ProgressBarContainer>
  );
};

interface ProgressBarFillProps {
  fill: number | string,
  className?: string
}
const ProgressBarFill = ({ fill, className} :ProgressBarFillProps) => {
  return <ProgressBarFillStyled percentage={Number(fill)} className={className} />
}

interface PercentageTextProps {
  children: React.ReactNode;
  className?: string;
}
const PercentageText = ({ children, className }:PercentageTextProps) => {
  return <PercentageTextStyled className={className}>{children}</PercentageTextStyled>
}

ProgressBar.Fill = ProgressBarFill;
ProgressBar.Text = PercentageText;