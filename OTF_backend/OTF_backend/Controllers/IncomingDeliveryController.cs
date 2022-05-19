using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using OTF_backend.Models.Outbound.IncomingDelivery;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class IncomingDeliveryController : ControllerBase
    {
        private readonly IIncomingDeliveryRepository _incomingDeliveryRepository;

        public IncomingDeliveryController(IIncomingDeliveryRepository incomingDeliveryRepository)
        {
            _incomingDeliveryRepository = incomingDeliveryRepository;
        }

        [HttpGet]
        public async Task<ActionResult<IncomingDelivery[]>> Get()
        {
            try
            {
                var results = await _incomingDeliveryRepository.GetAllIncomingDeliveriesAsync();

                return results;
            }
            catch (Exception)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, "Database failure");
            }
        }
    }
}
