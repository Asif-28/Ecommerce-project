import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
export const Footer = () => {
  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary {...props} />
  ))(({ theme }) => ({
    backgroundColor: "#fff",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  }));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "0px solid rgba(0, 0, 0, .125)",
  }));

  return (
    <footer className="">
      <div className="h-[1px] bg-black mt-2 overflow-x-hidden " />
      <div className="section py-8 hidden md:block md:pl-[8rem]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
          {/* First Column */}
          <div className="flex flex-col ">
            <h3 className="text-base font-semibold">FOOTER MENU1</h3>
            <ul className="mt-3 ">
              <li className="mb-1">menu1</li>
              <li className="mb-1">menu2</li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">FOOTER MENU2</h3>
            <ul className="mt-3">
              <li className="mb-1">menu1</li>
              <li className="mb-1">menu2</li>
              <li className="mb-1">menu3</li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">FOOTER MENU3</h3>
            <ul className="mt-3 ">
              <li className="mb-1">menu1</li>
              <li className="mb-1">menu2</li>
              <li className="mb-1">menu3</li>
              <li className="mb-1">menu4</li>
              <li className="mb-1">menu5</li>
            </ul>
          </div>
        </div>

        {/* New Row for Additional Menus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 cursor-pointer">
          {/* Fourth Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">FOOTER MENU4</h3>
            <ul className="mt-3 ">
              <li className="mb-1">menu1</li>
              <li className="mb-1">menu2</li>
            </ul>
          </div>

          {/* Fifth Column */}
          <div className="flex flex-col">
            <h3 className="text-base font-semibold">FOOTER MENU5</h3>
            <ul className="mt-3 ">
              <li className="mb-1">menu1</li>
              <li className="mb-1">menu2</li>
              <li className="mb-1">menu3</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[1px] bg-black mt-2 overflow-x-hidden hidden md:block" />
      <div className="z-40 sticky top-0 bg-[#fff] overflow-hidden "></div>

      {/* Mobile View  */}

      <div className=" md:hidden">
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>FOOTER MENU1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="mt-1 ml-[.6rem]">
                <li className="mb-1">menu1</li>
                <hr />
                <li className="mb-1">menu2</li>
                <hr />
                <li className="mb-1">menu3</li>
                <hr />
                <li className="mb-1">menu4</li>
                <hr />
                <li className="mb-1">menu5</li>
                <hr />
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>FOOTER MENU2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="mt-1 ml-[.6rem] ">
                <li className="mb-1">menu1</li>
                <hr />
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>FOOTER MENU3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="mt-1 ml-[.6rem] ">
                <li className="mb-1">menu1</li>
                <hr />
                <li className="mb-1">menu2</li>
                <hr />
                <li className="mb-1">menu3</li>
                <hr />
                <li className="mb-1">menu4</li>
                <hr />
                <li className="mb-1">menu5</li>
                <hr />
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>FOOTER MENU4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="mt-1 ml-[.6rem]">
                <li className="mb-1">menu1</li>
                <hr />
                <li className="mb-1">menu2</li>
                <hr />
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<AddIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>FOOTER MENU5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul className="mt-1 ml-[.6rem]">
                <li className="mb-1">menu1</li>
                <hr />
                <li className="mb-1">menu2</li>
                <hr />
                <li className="mb-1">menu3</li>
                <hr />
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="text-center  tracking-wide ">
        <h3 className="py-2 text-[15px] sm:text-[18px] font-light">
          &copy; Walmart.All Rights Reserved
        </h3>
      </div>
    </footer>
  );
};
