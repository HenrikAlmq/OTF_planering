using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.IncomingDelivery
{
    public interface IIncomingDeliveryRepository
    {
        Task<IncomingDelivery[]> GetAllIncomingDeliveriesAsync();
        void CreateIncomingDelivery(IncomingDelivery incomingDelivery);
        Task<IncomingDelivery> GetIncomingDeliveryByIdAsync(int IncomingDeliveryId);
        Task<IncomingDelivery> GetIncomingDeliveryByOrderIdAsync(string PurchaseOrderId);


    }
}
