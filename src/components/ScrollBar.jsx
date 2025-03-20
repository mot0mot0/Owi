import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import '../styles/scroll_bar.css'

const ScrollBar = () => {
  const scrollMenu = [
    {
      id: 0,
      title: 'section_1',
    },
    {
      id: 1,
      title: 'section_2',
    },
    {
      id: 2,
      title: 'section_3',
    },
    {
      id: 3,
      title: 'section_4',
    },
    {
      id: 4,
      title: 'section_5',
    },
  ]

  const upKeys = { 33: 1, 36: 1, 37: 1, 38: 1 }
  const downKeys = { 32: 1, 34: 1, 35: 1, 39: 1, 40: 1 }

  const [currentPosition, setCurrentPosition] = useState(0)
  const [scrollAbility, setScrollAbility] = useState(true)

  //Якорный скролл
  const toLastSection = (e) => {
    e.preventDefault()

    if (currentPosition !== 0) {
      document.getElementById('scroll-link_' + (currentPosition - 1)).click()
    }
  }

  const toNextSection = (e) => {
    e.preventDefault()

    if (currentPosition !== 4) {
      document.getElementById('scroll-link_' + (currentPosition + 1)).click()
    }
  }

  const sectionScrollForScrollKeys = (e) => {
    if (upKeys[e.keyCode] && currentPosition !== 0) {
      setScrollAbility(false)

      document.removeEventListener('keydown', sectionScrollForScrollKeys, false)

      toLastSection(e)

      setTimeout(() => {
        setScrollAbility(true)
      }, 510)
    } else if (downKeys[e.keyCode] && currentPosition !== 4) {
      setScrollAbility(false)

      document.removeEventListener('keydown', sectionScrollForScrollKeys, false)

      toNextSection(e)

      setTimeout(() => {
        setScrollAbility(true)
      }, 510)
    }
  }

  const sectionScroll = (e) => {
    e.preventDefault()

    if (e.wheelDelta > 0 && e.deltaY < -50 && currentPosition !== 0) {
      setScrollAbility(false)

      window.removeEventListener('DOMMouseScroll', sectionScroll, false)
      window.removeEventListener(wheelEvent, sectionScroll, {
        passive: false,
      })
      window.removeEventListener('touchmove', sectionScroll, {
        passive: false,
      })

      toLastSection(e)

      setTimeout(() => {
        setScrollAbility(true)
      }, 500)
    } else if (e.wheelDelta < 0 && e.deltaY > 50 && currentPosition !== 4) {
      setScrollAbility(false)

      window.removeEventListener('DOMMouseScroll', sectionScroll, false)
      window.removeEventListener(wheelEvent, sectionScroll, {
        passive: false,
      })
      window.removeEventListener('touchmove', sectionScroll, {
        passive: false,
      })

      toNextSection(e)

      setTimeout(() => {
        setScrollAbility(true)
      }, 500)
    }
  }

  const preventDefaultScroll = (e) => {
    e.preventDefault()
  }

  let supportsPassive = false
  try {
    window.addEventListener(
      'test',
      null,
      Object.defineProperty({}, 'passive', {
        get: function () {
          supportsPassive = true
          return supportsPassive
        },
      })
    )
  } catch (e) {}

  let wheelEvent =
    'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'

  useEffect(() => {
    if (scrollAbility) {
      window.addEventListener('DOMMouseScroll', sectionScroll, false)
      window.addEventListener(wheelEvent, sectionScroll, { passive: false })
      window.addEventListener('touchmove', sectionScroll, {
        passive: false,
      })
      document.addEventListener('keydown', sectionScrollForScrollKeys, false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollAbility, wheelEvent])

  window.addEventListener('DOMMouseScroll', preventDefaultScroll, false)
  window.addEventListener(wheelEvent, preventDefaultScroll, {
    passive: false,
  })
  window.addEventListener('touchmove', preventDefaultScroll, {
    passive: false,
  })

  return (
    <ul className="scroll__bar">
      {scrollMenu.map((menu) => (
        <Link
          id={'scroll-link_' + menu.id}
          key={menu.id}
          to={menu.title}
          smooth={true}
          duration={500}
          ignoreCancelEvents={true}
          onClick={() => {
            setCurrentPosition(menu.id)
          }}>
          <div
            id={'circle_' + menu.id}
            className={`circle ${menu.id === currentPosition && 'active'}`}
          />
        </Link>
      ))}
    </ul>
  )
}

export default ScrollBar
