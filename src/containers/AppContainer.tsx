import { FunctionComponent } from "react";
import Head from "next/head";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";
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
