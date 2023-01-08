import * as React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import './AdvantageStyle.css';
import TopProgressBar from './TopProgressBar';

export default function Advantage() {
  const [progress, setProgress] = React.useState(0)
  const [num, setNum] = React.useState(0)

  const [changeImage, setChangeImage] = React.useState(
    'https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg',
  )

  const selectImage = (element) => {
    setNum(element)
    setProgress(0)
    if (element === 0) {
      setChangeImage(
        'https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg',
      )
    }
    if (element === 1) {
      setChangeImage(
        'https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg',
      )
    }
    if (element === 2) {
      setChangeImage(
        'https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg',
      )
    }
    if (element === 3) {
      setChangeImage(
        'https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg',
      )
    }

    let items = document.getElementsByClassName('advantage-topic-sub-heading')
    for (let i = 0; i < items.length; i++) {
      if (i === element) {
        items[i].style.color = 'black'
      } else {
        items[i].style.color = '#499557'
      }
    }
  }

  React.useEffect(() => {
    let timer
    if (progress < 100) {
      timer = setInterval(
        () =>
          setProgress((prevProgress) =>
            prevProgress >= 100 ? 0 : (prevProgress += 2),
          ),
        100,
      )
    } else {
      if (num === 3) {
        selectImage(0)
      } else {
        let current = num
        selectImage(current + 1)
      }
    }
    return () => {
      clearInterval(timer)
    }
  }, [num, progress])

  return (
    <div>
      <Grid
        className="advantage-container"
        container
        my={8}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          className="advantage-images"
          item
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box bgcolor="primary-light">
            <img src={changeImage} alt="image1" />
          </Box>
        </Grid>
        <Grid className="advantage-topic" item md={6} xs={6}>
          <Typography
            variant="h6"
            className="advantage-topic-sub-heading"
            onClick={() => selectImage(0)}
          >
            Increase your productivity
          </Typography>
          <Typography
            variant="subtitle1"
            className="advantage-topic-sub-para"
            onClick={() => selectImage(0)}
          >
            Paraphrase more text at once to finish writing faster.
          </Typography>

          <TopProgressBar value={num === 0 ? progress : 0} />

          <Typography
            mt={2}
            variant="h6"
            className="advantage-topic-sub-heading"
            onClick={() => selectImage(1)}
          >
            Access all modes
          </Typography>
          <Typography
            variant="subtitle1"
            className="advantage-topic-sub-para"
            onClick={() => selectImage(1)}
          >
            Get maximum control over how you paraphrase.
          </Typography>
          <TopProgressBar value={num === 1 ? progress : 0} />
          <Typography
            mt={2}
            variant="h6"
            className="advantage-topic-sub-heading"
            onClick={() => selectImage(2)}
          >
            Scan for plagiarism
          </Typography>
          <Typography
            variant="subtitle1"
            className="advantage-topic-sub-para"
            onClick={() => selectImage(2)}
          >
            Unlock the Plagiarism Checker to guarantee all sources are cited and
            nothing is unintentionally plagiarized.
          </Typography>
          <TopProgressBar value={num === 2 ? progress : 0} />
          <Typography
            mt={2}
            variant="h6"
            className="advantage-topic-sub-heading"
            onClick={() => selectImage(3)}
          >
            Compare all mode outputs at once
          </Typography>
          <Typography
            variant="subtitle1"
            className="advantage-topic-sub-para"
            onClick={() => selectImage(3)}
          >
            Paraphrase in and compare outputs from all seven modes.
          </Typography>
          <TopProgressBar value={num === 3 ? progress : 0} />
        </Grid>
      </Grid>
    </div>
  )
}
