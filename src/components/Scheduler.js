import 'dhtmlx-scheduler'
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css'
import { Component } from 'react'


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
        scheduler.renderEvent = function(container, ev) {
            const BODY_TOP_MARGIN = 19
            const CONTAINER_LEFT_MARGIN = 20
            const bodyHeigth = `${container.style.height.replace('px', '') - BODY_TOP_MARGIN}px`;
            const containerWidth = `${container.style.width.replace('px', '') - CONTAINER_LEFT_MARGIN}px`;

            container.style.width = containerWidth;
            container.style.marginLeft = `${CONTAINER_LEFT_MARGIN}px`;
            
            container.innerHTML = `
            <div class="dhx_event_move dhx_header" style=" width:${containerWidth};">&nbsp;</div>
            <div class="dhx_event_move dhx_title" style="">${scheduler.templates.event_header(ev.start_date, ev.end_date, ev)}</div>
            <div class="dhx_body" style=" width:${containerWidth}; height:${bodyHeigth};">${scheduler.templates.event_text(ev.start_date,ev.end_date,ev)}</div>
            <div class="dhx_event_resize dhx_footer" style=" width:${containerWidth};"></div>`
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