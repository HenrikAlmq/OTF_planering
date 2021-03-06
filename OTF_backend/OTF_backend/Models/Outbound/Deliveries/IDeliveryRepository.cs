using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.Deliveries
{
    public interface IDeliveryRepository
    {
        void CreateDelivery(Delivery delivery);
        Task<Delivery[]> GetAllOrdersAsync();
        Task<Delivery> GetDeliveryByOrderId(string orderId);
        Task<Delivery> GetDeliveryByDeliveryId(int deliveryId);
        bool AllocateDelivery(int deliveryId);
        void UpdateOrder(UpdateOrder updateOrder);
    }
}
