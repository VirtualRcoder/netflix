import { Box, Button, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "72vh",
          backgroundImage: `url("https://www.okynemedialab.com/wp-content/uploads/2019/11/netflix-background-50-Black-1080x608.jpg")`,
          display: "block",
        }}
      >
        <Box
          sx={{
            display: "flex",
            paddingTop: "10px",
            paddingLeft: "200px",
            paddingRight: "200px",
          }}
        >
          <Typography
            sx={{
              color: "Red",
              fontWeight: 600,
              fontSize: 30,
            }}
          >
            NETFLIX
          </Typography>

          <Box
            sx={{
              marginLeft: "75%",
            }}
          >
            <Select
              sx={{
                marginRight: "20px",
              }}
            >
              <MenuItem value={"English"}>English</MenuItem>
              <MenuItem value={"Hindi"}>Hindi</MenuItem>
              <MenuItem value={"Russian"}>Russian</MenuItem>
            </Select>
            <Button
              type="container"
              sx={{
                background: "red",
                color: "#fff",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            color: "white",
            marginTop: "200px",
            paddingLeft: "350px",
            paddingRight: "400px",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: 45,
            }}
          >
            Enjoy big movies, hit series and more from ₹ 149.
          </Typography>
          <Typography
            sx={{
              fontWeight: 60,
              fontSize: 30,
            }}
          >
            Join today. Cancel anytime.
          </Typography>
          <Typography
            sx={{
              fontWeight: 60,
              fontSize: 20,
              marginTop: 4,
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <TextField
              variant="filled"
              label="Email address"
              sx={{
                backgroundColor: "#242124",
                width: "400px",
                height: "60px",
                border: "1px solid white",
              }}
            ></TextField>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "red",
                marginLeft: "10px",
                padding: 2,
                fontSize: 20,
              }}
            >
              Get Started >
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "3px",
          height: "72vh",
          backgroundColor: "black",
          display: "flex",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            width: "40%",
            padding: "300px 0px 0px 200px",
          }}
        >
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: 600,
            }}
          >
            Enjoy on your TV
          </Typography>
          <Typography
            sx={{
              fontSize: 25,
            }}
          >
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100px",
            width: "100px",
            backgroundColor: "red",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          marginTop: "3px",
          height: "72vh",
          backgroundColor: "black",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          akjsakskj
        </Box>
        <Box
          sx={{
            color: "#fff",
            padding: "300px 0px 0px 200px",
          }}
        >
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: 600,
            }}
          >
            Download your shows to watch offline
          </Typography>
          <Typography
            sx={{
              fontSize: 25,
            }}
          >
            Save your favourites easily and always have something to watch.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "3px",
          height: "72vh",
          backgroundColor: "black",
          display: "flex",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            width: "40%",
            padding: "300px 0px 0px 200px",
          }}
        >
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: 600,
            }}
          >
            Watch everywhere
          </Typography>
          <Typography
            sx={{
              fontSize: 25,
            }}
          >
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "100px",
            width: "100px",
            backgroundColor: "red",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          marginTop: "3px",
          height: "72vh",
          backgroundColor: "black",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
          }}
        >
          <img
            src="https://www.giztele.com/wp-content/uploads/2021/07/kids-netflix-2048x1538.jpg"
            height="600px"
            width="800px"
          />
        </Box>
        <Box
          sx={{
            color: "#fff",
            padding: "300px 0px 0px 200px",
          }}
        >
          <Typography
            sx={{
              fontSize: 45,
              fontWeight: 600,
            }}
          >
            Create profiles for kids
          </Typography>
          <Typography
            sx={{
              fontSize: 25,
            }}
          >
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "3px",
          height: "72vh",
          backgroundColor: "black",
          padding: "50px 200px 0 200px",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: 45,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            }
            sx={{
              backgroundColor: "#242124",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              What is Netflix
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#500",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries and more – on
              thousands of internet-connected devices.
              <br />
              <br />
              You can watch as much as you want, whenever you want, without a
              single ad – all for one low monthly price. There's always
              something new to discover, and new TV shows and movies are added
              every week!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            }
            sx={{
              backgroundColor: "#242124",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              How much does Netflix cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#500",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            }
            sx={{
              backgroundColor: "#242124",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Where can i watch?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#500",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Watch anywhere, anytime. Sign in with your Netflix account to
              watch instantly on the web at netflix.com from your personal
              computer or on any internet-connected device that offers the
              Netflix app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
              <br />
              <br />
              You can also download your favourite shows with the iOS, Android,
              or Windows 10 app. Use downloads to watch while you're on the go
              and without an internet connection. Take Netflix with you
              anywhere.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            }
            sx={{
              backgroundColor: "#242124",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              How do i cancel?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#500",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Netflix is flexible. There are no annoying contracts and no
              commitments. You can easily cancel your account online in two
              clicks. There are no cancellation fees – start or stop your
              account anytime.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            }
            sx={{
              backgroundColor: "#242124",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              What can i watch on Netflix?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#500",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals, and more. Watch
              as much as you want, anytime you want.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={
              <AddIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                }}
              />
            }
            sx={{
              backgroundColor: "#242124",
              marginTop: "10px",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              Is Netflix good for kids?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: "#500",
            }}
          >
            <Typography
              sx={{
                fontSize: 25,
                color: "#fff",
              }}
            >
              The Netflix Kids experience is included in your membership to give
              parents control while kids enjoy family-friendly TV shows and
              films in their own space.
              <br />
              <br />
              Kids profiles come with PIN-protected parental controls that let
              you restrict the maturity rating of content kids can watch and
              block specific titles you don’t want kids to see.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 60,
              fontSize: 20,
              marginTop: 7,
            }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
          <Box
            sx={{
              marginTop: "10px",
            }}
          >
            <TextField
              variant="filled"
              label="Email address"
              sx={{
                backgroundColor: "#242124",
                width: "400px",
                height: "60px",
                border: "1px solid white",
              }}
            ></TextField>
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "red",
                marginLeft: "10px",
                padding: 2,
                fontSize: 20,
              }}
            >
              Get Started >
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "3px",
          height: "40vh",
          backgroundColor: "black",
          padding: "50px 200px 0 200px",
          color: "#fff",
          display: "flex",
        }}
      >
        <Box>
          <Typography>Questions? Call 000-800-919-1694</Typography>
          <br />
          <br />
          <Typography>FAQ</Typography>
          <br />
          <Typography>Investor Relations</Typography>
          <br />
          <Typography>Privacy</Typography>
          <br />
          <Typography>Speed Test</Typography>
          <br />

          <Select
            sx={{
              marginRight: "20px",
              border: "1px solid white",
              color: "white",
            }}
          >
            <MenuItem value={"English"}>English</MenuItem>
            <MenuItem value={"Hindi"}>Hindi</MenuItem>
            <MenuItem value={"Russian"}>Russian</MenuItem>
          </Select>
          <br />
          <br />
          <br />
          <footer>Netflix India</footer>
        </Box>

        <Box
          sx={{
            paddingLeft: "100px",
          }}
        >
          <br />
          <br />
          <br />
          <Typography>Help Centre</Typography>
          <br />
          <Typography>Jobs</Typography>
          <br />
          <Typography>Cookie Preferences</Typography>
          <br />
          <Typography>Legal Notices</Typography>
        </Box>

        <Box
          sx={{
            paddingLeft: "200px",
          }}
        >
          <br />
          <br />
          <br />
          <Typography>Account</Typography>
          <br />
          <Typography>Ways to Watch</Typography>
          <br />
          <Typography>Corporate Information</Typography>
          <br />
          <Typography>Only on Netflix</Typography>
        </Box>

        <Box
          sx={{
            paddingLeft: "200px",
          }}
        >
          <br />
          <br />
          <br />
          <Typography>Media Centre</Typography>
          <br />
          <Typography>Terms of Use</Typography>
          <br />
          <Typography>Contact Us</Typography>
        </Box>
      </Box>
    </>
  );
}
