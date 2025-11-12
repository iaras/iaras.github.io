'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PostMeta } from '@/lib/posts'

interface CalendarProps {
  posts: PostMeta[]
}

export default function Calendar({ posts }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date())

  // 記事の日付をMapに変換（日付 -> 記事の配列）
  const postsByDate = new Map<string, PostMeta[]>()
  posts.forEach(post => {
    const date = post.date
    if (!postsByDate.has(date)) {
      postsByDate.set(date, [])
    }
    postsByDate.get(date)!.push(post)
  })

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // 月の最初の日と最後の日を取得
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  // 最初の日の曜日（0: 日曜日）
  const firstDayOfWeek = firstDay.getDay()

  // 月の日数
  const daysInMonth = lastDay.getDate()

  // カレンダーの日付を生成
  const calendarDays: (number | null)[] = []

  // 最初の週の空白を追加
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarDays.push(null)
  }

  // 日付を追加
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  // 前月へ移動
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  // 次月へ移動
  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  // 日付をYYYY-MM-DD形式に変換
  const formatDate = (day: number) => {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return dateStr
  }

  // 記事がある日かチェック
  const hasPost = (day: number) => {
    const dateStr = formatDate(day)
    return postsByDate.has(dateStr)
  }

  // その日の記事を取得
  const getPostsForDay = (day: number) => {
    const dateStr = formatDate(day)
    return postsByDate.get(dateStr) || []
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={goToPreviousMonth} className="calendar-nav">
          &lt;
        </button>
        <h2 className="calendar-title">
          {year}年 {month + 1}月
        </h2>
        <button onClick={goToNextMonth} className="calendar-nav">
          &gt;
        </button>
      </div>

      <div className="calendar-grid">
        <div className="calendar-day-name">日</div>
        <div className="calendar-day-name">月</div>
        <div className="calendar-day-name">火</div>
        <div className="calendar-day-name">水</div>
        <div className="calendar-day-name">木</div>
        <div className="calendar-day-name">金</div>
        <div className="calendar-day-name">土</div>

        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="calendar-day empty" />
          }

          const hasPosts = hasPost(day)
          const postsForDay = getPostsForDay(day)

          return (
            <div
              key={day}
              className={`calendar-day ${hasPosts ? 'has-post' : ''}`}
            >
              <span className="calendar-day-number">{day}</span>
              {hasPosts && (
                <div className="calendar-day-posts">
                  {postsForDay.map(post => (
                    <Link
                      key={post.slug}
                      href={`/posts/${post.slug}`}
                      className="calendar-post-link"
                      title={post.title}
                    >
                      •
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
