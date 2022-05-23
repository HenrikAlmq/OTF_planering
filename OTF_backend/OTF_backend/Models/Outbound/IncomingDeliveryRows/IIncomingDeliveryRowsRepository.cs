using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.IncomingDeliveryRows
{
    public interface IIncomingDeliveryRowsRepository
    {
        Task<IncomingDeliveryRows[]> GetIncomingDeliveryRowsById(int incomingDeliveryId);
        void CreateIncomingDeliveryRow(IncomingDeliveryRows incomingDeliveryRows);
        void UpdateIncomingDeliveryRow(int incomingDeliveryRowId, IncomingDeliveryRows incomingDeliveryRows);
        Task<IncomingDeliveryRows> GetIncomingDeliveryRow(int incomingDeliveryRowId);
        Task<IncomingDeliveryRows> DeleteIncomingDeliveryRow(int incomingDeliveryRowId);
    }
}
