'use client'

import React, { useRef, useEffect, useState, ReactNode } from 'react'

type SlideVariant =
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'fade-scale'
  | 'flip-up'
  | 'zoom-in'

interface SlideSectionProps {
  children: ReactNode
  variant?: SlideVariant
  className?: string
  delay?: number // delay in ms
  threshold?: number
}

export function SlideSection({
  children,
  variant = 'slide-up',
  className = '',
  delay = 0,
  threshold = 0.1,
}: SlideSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [direction, setDirection] = useState<'down' | 'up'>('down')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Track scroll direction smoothly
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current + 5) {
        setDirection('down')
      } else if (currentScrollY < lastScrollY.current - 5) {
        setDirection('up')
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', updateScrollDirection, { passive: true })

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateScrollDirection)
    }
  }, [threshold])

  const getHiddenTransform = () => {
    if (direction === 'up') {
      switch (variant) {
        case 'slide-left':
          return 'translate3d(-40px, -20px, 0)'
        case 'slide-right':
          return 'translate3d(40px, -20px, 0)'
        case 'fade-scale':
        case 'zoom-in':
          return 'scale3d(0.92, 0.92, 1) translate3d(0, -20px, 0)'
        case 'flip-up':
          return 'perspective(1200px) rotateX(-10deg) translate3d(0, -30px, 0)'
        case 'slide-down':
        case 'slide-up':
        default:
          return 'translate3d(0, -40px, 0)'
      }
    } else {
      switch (variant) {
        case 'slide-left':
          return 'translate3d(-40px, 20px, 0)'
        case 'slide-right':
          return 'translate3d(40px, 20px, 0)'
        case 'fade-scale':
        case 'zoom-in':
          return 'scale3d(0.92, 0.92, 1) translate3d(0, 20px, 0)'
        case 'flip-up':
          return 'perspective(1200px) rotateX(10deg) translate3d(0, 30px, 0)'
        case 'slide-down':
        case 'slide-up':
        default:
          return 'translate3d(0, 40px, 0)'
      }
    }
  }

  const hiddenStyle: React.CSSProperties = {
    opacity: 0,
    transform: getHiddenTransform(),
  }

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) perspective(1200px) rotateX(0deg)',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...(isVisible ? visibleStyle : hiddenStyle),
        transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
