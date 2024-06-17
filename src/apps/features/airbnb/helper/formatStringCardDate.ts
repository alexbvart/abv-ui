export const formatStringCardDate=(startDate: string, endDate: string): string => {
    const monthNames = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
  
    const start = new Date(startDate.split("/").reverse().join("-"));
    const end = new Date(endDate.split("/").reverse().join("-"));
  
  
    const startDay = start.getDate();
    const endDay = end.getDate();
    const startMonth = monthNames[start.getMonth()];
    const endMonth = monthNames[end.getMonth()];
  
    if (start.getMonth() === end.getMonth()) {
      return `${startDay}-${endDay} de ${startMonth}`;
    } else {
      return `${startDay} de ${startMonth} - ${endDay} de ${endMonth}`;
    }
  }
  