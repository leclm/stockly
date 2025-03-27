import { SxProps, Theme } from "@mui/material/styles";

export const productDetailsStyles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    py: 4,
    px: { xs: 2, md: 4 },
    backgroundColor: 'background.default',
    minHeight: '100vh',
  } as SxProps<Theme>,

  content: {
    width: '100%',
    maxWidth: 'md',
    mx: 'auto',
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    justifyContent: 'space-between',
    alignItems: { xs: 'flex-start', sm: 'center' },
    gap: 2,
    mb: 4,
  } as SxProps<Theme>,

  title: {
    typography: 'h4',
    fontWeight: 700,
    color: 'text.primary',
    WebkitBackgroundClip: 'text',
    lineHeight: 1.2,
  } as SxProps<Theme>,

  buttonGroup: {
    display: 'flex',
    gap: 2,
  } as SxProps<Theme>,

  detailsCard: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    gap: 4,
    backgroundColor: 'background.paper',
    boxShadow: 3,
    borderRadius: 3,
    p: 4,
    mb: 4,
  } as SxProps<Theme>,

  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: { md: 1 },
  } as SxProps<Theme>,

  avatar: {
    width: 200,
    height: 200,
    borderRadius: 2,
    boxShadow: 2,
    mb: 3,
  } as SxProps<Theme>,

  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: { md: 2 },
    gap: 2,
  } as SxProps<Theme>,

  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  } as SxProps<Theme>,

  infoLabel: {
    typography: 'body1',
    fontWeight: 600,
    color: 'text.secondary',
    minWidth: 100,
  } as SxProps<Theme>,

  infoValue: {
    typography: 'body1',
    color: 'text.primary',
  } as SxProps<Theme>,

  price: {
    typography: 'h5',
    fontWeight: 700,
    color: 'primary.main',
  } as SxProps<Theme>,

  backButton: {
    alignSelf: 'flex-start',
    px: 4,
    py: 1.5,
    borderRadius: 2,
    textTransform: 'none',
    fontWeight: 600,
  } as SxProps<Theme>,
};