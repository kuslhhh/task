import { getTaskCountByStatus } from '@/services/task'
import React from 'react'
import Charts from './Charts'

export default async function Chart() {

    const count = await getTaskCountByStatus()
    const chartData = [
        {status: "starting", count: count.starting, fill: "#ef4444"},
        {status: "progress", count: count.progress, fill: "#f97316"},
        {status: "done", count: count.done, fill: "#22c55e"},
    ]

  return (
    <Charts data = {chartData} />
  )
}
