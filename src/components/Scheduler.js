import React, {Component} from 'react'
import 'dhtmlx-scheduler'
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css'


const scheduler = window.scheduler
export default class Scheduler extends Component {
    componentDidMount() {
        scheduler.skin = 'material'
        scheduler.config.header = [
            "day",
            "week",
            "month",
            "date",
            "prev",
            "today",
            "next"
        ]
        const { events } = this.props
        scheduler.templates.event_class = function(start, end, event) {
            return "my_event"
        }

        scheduler.renderEvent = function(container, ev) {
            const container_width = `${container.style.width.replace('px', '') - 20}px`
            console.log(container_width)
            container.style.with = container_width
            container.innerHTML = `
            <div class='dhx_event_move my_event_move' style='width: ${container_width}'></div>
            <div class='my_event_body'>
                <span class='event_date'>
                    ${scheduler.templates.event_header(ev.start_date, ev.end_date, ev)}
                </span><br/>
                <span>${scheduler.templates.event_text(ev.start_date,ev.end_date,ev)}</span></div>
            <div class='dhx_event_resize my_event_resize' style='width: ${container_width}'></div>`
            return true
        }
        scheduler.init(this.schedulerContainer, new Date(), "week")
        scheduler.clearAll()
        scheduler.parse(events)
    }

    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: '100%', height: '100%' } }
            ></div>
        )
    }
}