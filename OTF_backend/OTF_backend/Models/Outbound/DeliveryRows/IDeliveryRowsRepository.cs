using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.DeliveryRows
{
    public interface IDeliveryRowsRepository
    {
        Task<DeliveryRows[]> GetDeliveryRowAsync(int deliveryId);
        void CreateDeliveryRow(DeliveryRows deliveryRows);
    }
}
