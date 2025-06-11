<template>
  <div class="container mt-6">
    <h2 class="font-normal text-xl mb-6 block">Welcome to SuperAdmin</h2>
    <div class="w-full border shadow mt-4">
      <highcharts :options="chartOptions"></highcharts>
    </div>
    <div class="flex w-full mt-6">
      <div class="w-1/2 bg-white border shadow mr-6">
        <div class="bg-gray-100 px-4 py-3 border-b font-medium text-lg">
          Tenants By Country
        </div>
        <ul class="p-4">
          <li
            v-for="tc in reports.tenants_by_country"
            :key="tc.country"
            class="flex justify-between py-1"
          >
            <span>{{ tc.country }}</span>
            <span class="font-semibold">{{ tc.total_tenants }}</span>
          </li>
        </ul>
      </div>
      <div class="w-1/2 bg-white border shadow ">
        <div class="bg-gray-100 px-4 py-3 border-b font-medium text-lg">
          Tenants By Plan
        </div>
        <ul class="p-4">
          <li
            v-for="tp in reports.tenants_by_plan"
            :key="tp.plan_name"
            class="flex justify-between  py-1"
          >
            <div>{{ tp.plan_name }}</div>
            <div class="font-semibold">{{ tp.total_tenants }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import axios from "axios";

export default {
  components: {
    highcharts: Chart
  },
  data() {
    return {
      reports: [],
      chartOptions: {
        chart: {
          type: "areaspline",
          scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
          }
        },
        credits: {
          enabled: false
        },
        title: {
          text:
            "Tenant Registration Report Grouped by Month (WIP with fake data)"
        },
        subtitle: {
          text: "Sign Up in past 12 month"
        },
        xAxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: "Total Tenants"
          }
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          spline: {
            lineWidth: 4,
            states: {
              hover: {
                lineWidth: 5
              }
            },
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            name: "Basic Plan Monthly",
            data: [
              49.9,
              71.5,
              106.4,
              129.2,
              144.0,
              176.0,
              135.6,
              148.5,
              216.4,
              194.1,
              95.6,
              54.4
            ]
          },
          {
            name: "Basic Plan Yearly",
            data: [
              83.6,
              78.8,
              98.5,
              93.4,
              106.0,
              84.5,
              105.0,
              104.3,
              91.2,
              83.5,
              106.6,
              92.3
            ]
          },
          {
            name: "Premium Plan Monthly",
            data: [
              48.9,
              38.8,
              39.3,
              41.4,
              47.0,
              48.3,
              59.0,
              59.6,
              52.4,
              65.2,
              59.3,
              51.2
            ]
          },
          {
            name: "Premium Plan Yearly",
            data: [
              42.4,
              33.2,
              34.5,
              39.7,
              52.6,
              75.5,
              57.4,
              60.4,
              47.6,
              39.1,
              46.8,
              51.1
            ]
          }
        ]
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$loading(true);
      axios
        .get("dashboard")
        .then(response => {
          vm.reports = response.data.data;
        })
        .finally(() => {
          vm.$loading(false);
        });
    });
  }
};
</script>
