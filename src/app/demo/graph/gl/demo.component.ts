
import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractGraphData, GraphData} from "jigsaw/core/data/graph-data";
import {JigsawGraph} from "jigsaw/component/graph/graph";
import {HttpClient} from "@angular/common/http";

@Component({
    templateUrl: './demo.component.html'
})
export class GlGraphComponent implements OnInit {
    constructor(public http: HttpClient) {

    }

    data: AbstractGraphData;

    @ViewChild("graph") graph: JigsawGraph;

    patchOption = {
        title: {
            text: '补丁 - 堆叠区域图'
        }
    };

    handleClick(info){
        console.log(info);
    }

    ngOnInit() {
        /*let graphData = new GraphDataDemo();
        this.data = graphData;
        graphData.optionsPatch = this.patchOption;*/


        //this.data.refresh();
    }

    ngAfterViewInit() {
        this.http.get('mock-data/map/china').subscribe(res => {
            console.log(res);
            this.graph.registerMap('china', res);

            let population = require('../../../mock-data/population.json');
            //population.filter(p => {})

            this.data = new GraphData({
                backgroundColor: '#cdcfd5',
                geo3D: {
                    map: 'china',
                    shading: 'lambert',
                    light: {
                        main: {
                            intensity: 3,
                            shadow: true,
                            shadowQuality: 'high',
                            alpha: 30
                        },
                        ambient: {
                            intensity: 0
                        },
                        ambientCubemap: {
                            texture: 'data-gl/asset/canyon.hdr',
                            exposure: 1,
                            diffuseIntensity: 0.5
                        }
                    },
                    viewControl: {
                        distance: 50,
                        panMouseButton: 'left',
                        rotateMouseButton: 'right'
                    },
                    groundPlane: {
                        show: true,
                        color: '#999'
                    },
                    postEffect: {
                        enable: true,
                        bloom: {
                            enable: false
                        },
                        SSAO: {
                            radius: 1,
                            intensity: 1,
                            enable: true
                        },
                        depthOfField: {
                            enable: false,
                            focalRange: 10,
                            blurRadius: 10,
                            fstop: 1
                        }
                    },
                    temporalSuperSampling: {
                        enable: true
                    },
                    itemStyle: {
                    },

                    regionHeight: 2
                },
                visualMap: {
                    max: 40,
                    calculable: true,
                    realtime: false,
                    inRange: {
                        color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                    },
                    outOfRange: {
                        colorAlpha: 0
                    }
                },
                series: [{
                    type: 'bar3D',
                    coordinateSystem: 'geo3D',
                    shading: 'lambert',
                    //data: data,
                    barSize: 0.1,
                    minHeight: 0.2,
                    silent: true,
                    itemStyle: {
                        color: 'orange'
                        // opacity: 0.8
                    }
                }]
            });
        })
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawGraph',
        'AbstractGraphData.createChartOptions',
        'AbstractGraphData.optionsPatch',
    ];
}

