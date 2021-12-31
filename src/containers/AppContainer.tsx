import { AppBar, styled, Toolbar, Typography, useTheme } from "@mui/material";
import Head from "next/head";
import { FunctionComponent } from "react";
import { mediaStyles } from "src/theme";

export type AppHtmlHeadProps = {
  title: string;
};

const MainContainer = styled("main")(() => ({
  display: "flex",
  flex: 1,
  flexDirection: "column",
}));

const PageHeader = styled(Toolbar)(({ theme }) => ({
  width: "100%",
  maxWidth: theme.breakpoints.values.xl,
  height: theme.shape.headerHeight,
  margin: "auto",

  "& > h4": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

export const AppContainer: FunctionComponent<AppHtmlHeadProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        )
        <style
          type="text/css"
          dangerouslySetInnerHTML={{ __html: mediaStyles }}
        />
      </Head>
      <AppBar position="static" color="transparent" component="header">
        <PageHeader>
          <Typography variant="h4">{title}</Typography>
        </PageHeader>
      </AppBar>
      <MainContainer>{children}</MainContainer>
    </>
  );
};
