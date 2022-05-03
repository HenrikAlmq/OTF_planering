using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound.Deliveries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DeliveryController : ControllerBase
    {
        private readonly IDeliveryRepository _deliveryRepository;

        public DeliveryController(IDeliveryRepository deliveryRepository)
        {
            _deliveryRepository = deliveryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<Delivery[]>> Get()
        {
            try
            {
                var results = await _deliveryRepository.GetAllOrdersAsync();

                return results;
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, "Database failure");
            }
        }
    }
}
