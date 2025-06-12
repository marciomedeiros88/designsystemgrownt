import "./index.scss";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";
import React, { useState } from "react";

function Conteudograficos() {
  const optionpizza = {
    textStyle: {
      fontFamily: "DM Sans, sans-serif",
    },
    title: {
      text: "Exemplo de gráfico Pizza",
      x: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "horizontal",
      bottom: "bottom",
      x: "center",
      data: ["IRPJ/CSLL", "IPI", "ICMS", "PIS/COFINS", "Teses tributárias"],
    },
    series: [
      {
        name: "Robô Fiscal",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 335, name: "IPRJ/CSLL" },
          { value: 310, name: "IPI" },
          { value: 234, name: "ICMS" },
          { value: 135, name: "PIS/COFINS" },
          { value: 1548, name: "Teses tributárias" },
        ],
        color: ["#122d44", "#1e3a59", "#084b77", "#436184", "#7590ae"],

        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  const optionbarra = {
    textStyle: {
      fontFamily: "DM Sans, sans-serif",
    },
    xAxis: {
      type: "category",
      data: ["2021", "2022", "2023", "2024", "2025"],
    },
    yAxis: {
      type: "value",
    },
    title: {
      text: "Exemplo de gráfico de Barras Vertical",
      x: "center",
    },
    series: [
      {
        data: [
          {
            value: 120,
            itemStyle: {
              color: "#122d44",
            },
          },
          {
            value: 200,
            itemStyle: {
              color: "#1e3a59",
            },
          },
          {
            value: 150,
            itemStyle: {
              color: "#084b77",
            },
          },
          {
            value: 80,
            itemStyle: {
              color: "#436184",
            },
          },
          {
            value: 70,
            itemStyle: {
              color: "#7590ae",
            },
          },
        ],
        type: "bar",
      },
    ],
  };

  const optionradar = {
    textStyle: {
      fontFamily: "DM Sans, sans-serif",
    },
    title: {
      text: "Exemplo de gráfico radar",
      x: "center",
    },
    legend: {
      data: ["FINEP", "Inovacred"],
      orient: "horizontal",
      bottom: "bottom",
      x: "center",
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "Recursos Humanos", max: 6500 },
        { name: "Náquinas e Equipamentos", max: 16000 },
        { name: "Equipe Própria", max: 30000 },
        { name: "Serviços de Terceiros", max: 38000 },
        { name: "Software", max: 52000 },
        { name: "Obras Civis", max: 25000 },
        { name: "Viagens", max: 25000 },
      ],
    },
    color: ["#122d44", "#436184", "#7590ae"],
    series: [
      {
        name: "FINEP vs Inovacred",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000, 16000],
            name: "FINEP",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000, 16000],
            name: "Inovacred",
          },
        ],
      },
    ],
  };

  const optionbarrahorizontal = {
    textStyle: {
      fontFamily: "DM Sans, sans-serif",
    },
    title: {
      text: "Exemplo de gráfico Barras Horizontal",
      x: "center",
    },

    dataset: {
      source: [
        ["score", "amount", "product"],
        [89.3, 58212, "Máquinas"],
        [57.1, 78254, "Software"],
        [74.4, 41032, "Viagens"],
        [50.1, 12755, "Patentes"],
        [89.7, 20145, "Obras civis"],
        [68.1, 79146, "Treinamentos"],
        [19.6, 91852, "Instalações"],
        [10.6, 101852, "Materiais"],
        [32.7, 20112, "Terceiros"],
      ],
    },
    grid: { containLabel: true },
    xAxis: { name: "amount" },
    yAxis: { type: "category" },

    visualMap: {
      orient: "horizontal",
      left: "center",
      min: 10,
      max: 100,
      text: ["Alto dispêndio", "Baixo dispêndio"],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ["#122d44", "#1e3a59", "#084b77", "#436184", "#7590ae"],
      },
    },

    series: [
      {
        type: "bar",
        encode: {
          // Map the "amount" column to X axis.
          x: "amount",
          // Map the "product" column to Y axis
          y: "product",
        },
      },
    ],
  };

  const [count, setCount] = useState(0);

  function onChartReady(echarts) {
    console.log("echarts is ready", echarts);
  }

  function onChartClick(param, echarts) {
    console.log(param, echarts);
    setCount(count + 1);
  }

  function onChartLegendselectchanged(param, echarts) {
    console.log(param, echarts);
  }

  return (
    <>
      <div className="Conteudograficos">
        <div className="titulocardsgraficos">
          <div className="titulocardmodal">
            <h1 className="titulomodal">Biblioteca de gráficos</h1>
          </div>
        </div>
        <div className="cardsgraficos">
          <div className="cardgrafico">
            <div className="grafico">
              <ReactECharts
                option={optionpizza}
                style={{ height: 550 }}
                onChartReady={onChartReady}
                onEvents={{
                  click: onChartClick,
                  legendselectchanged: onChartLegendselectchanged,
                }}
              />
            </div>
          </div>
          <div className="cardgrafico">
            <div className="grafico">
              <ReactECharts
                option={optionbarra}
                style={{ height: 550 }}
                onChartReady={onChartReady}
                onEvents={{
                  click: onChartClick,
                  legendselectchanged: onChartLegendselectchanged,
                }}
              />
            </div>
          </div>
        </div>
        <div className="cardsgraficos">
          <div className="cardgrafico">
            <div className="grafico">
              <ReactECharts
                option={optionradar}
                style={{ height: 550 }}
                onChartReady={onChartReady}
                onEvents={{
                  click: onChartClick,
                  legendselectchanged: onChartLegendselectchanged,
                }}
              />
            </div>
          </div>
          <div className="cardgrafico">
            <div className="grafico">
              <ReactECharts
                option={optionbarrahorizontal}
                style={{ height: 550 }}
                onChartReady={onChartReady}
                onEvents={{
                  click: onChartClick,
                  legendselectchanged: onChartLegendselectchanged,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteudograficos;
